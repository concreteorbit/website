from pathlib import Path
from PIL import Image
import shutil


SOURCE = Path(r"C:\Users\jacks\Downloads\FINAL CORRECT PHILS")
DEST = Path(r"C:\Users\jacks\OneDrive\Attachments\Documents\ChatGPT\concrete-orbit 3\concrete-orbit-alice-slim-20261011\public\images\projects")

assets = {
    "extreme-macro": SOURCE / "Phils - Extrememacro (correct).jpg",
    "hero": SOURCE / "Phils - Hero  (correct).png",
    "slight-macro": SOURCE / "Phils - Slight macro (correct).png",
    "hero-copy-space": SOURCE / "Phils - Hero + Copyspace(correct).png",
    "tilt-hero": SOURCE / "Phils - Tilt Hero  (correct).png",
    # Placement-only derivatives used in the advertising mockups. These are
    # intentionally separate from the five-image client deliverable.
    "slight-macro-copy-space": SOURCE / "Phils - Slight macro + Copyspace  (correct).jpg",
    "tilt-hero-copy-space": SOURCE / "Phils - Tilt Hero + Copyspace  (correct).jpg",
}


def resize_to_width(image: Image.Image, width: int) -> Image.Image:
    if image.width <= width:
        return image.copy()
    height = round(image.height * width / image.width)
    return image.resize((width, height), Image.Resampling.LANCZOS)


for slug, source in assets.items():
    image = Image.open(source).convert("RGB")
    small = resize_to_width(image, 1200)
    large = resize_to_width(image, 2000)

    small_path = DEST / f"phils-{slug}-1200.jpg"
    large_path = DEST / f"phils-{slug}-2000.jpg"
    small.save(small_path, "JPEG", quality=96, subsampling=0, optimize=True)

    # Preserve the supplied extreme macro byte-for-byte as the largest source.
    if slug == "extreme-macro" and image.size == large.size:
        shutil.copy2(source, large_path)
    else:
        large.save(large_path, "JPEG", quality=96, subsampling=0, optimize=True)

    print(f"{slug}: source={image.size}, 1200={small.size}, large={large.size}")
