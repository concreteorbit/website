from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
IMAGE_ROOT = PUBLIC / "images"
TEXT_ROOTS = [ROOT / "src", ROOT / "index.html"]

referenced: set[str] = set()
pattern = re.compile(r"/images/[A-Za-z0-9_./'-]+\.(?:avif|gif|jpe?g|png|svg|webp)", re.I)

for text_root in TEXT_ROOTS:
    paths = [text_root] if text_root.is_file() else [p for p in text_root.rglob("*") if p.is_file()]
    for path in paths:
        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        referenced.update(match.lstrip("/") for match in pattern.findall(text))

existing = {
    path.relative_to(PUBLIC).as_posix()
    for path in IMAGE_ROOT.rglob("*")
    if path.is_file()
}

missing = sorted(referenced - existing)
unused = sorted(existing - referenced)

print(f"referenced={len(referenced)} existing={len(existing)} unused={len(unused)} missing={len(missing)}")
if missing:
    print("MISSING")
    print("\n".join(missing))
if unused:
    print("UNUSED")
    print("\n".join(unused))

if "--delete" in sys.argv:
    public_root = PUBLIC.resolve()
    image_root = IMAGE_ROOT.resolve()
    for relative in unused:
        target = (PUBLIC / relative).resolve()
        if image_root not in target.parents:
            raise RuntimeError(f"Refusing to delete outside image root: {target}")
        if public_root not in target.parents:
            raise RuntimeError(f"Refusing to delete outside public root: {target}")
        target.unlink()
    print(f"DELETED {len(unused)} unreferenced image files")
