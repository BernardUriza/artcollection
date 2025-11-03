#!/usr/bin/env python3
"""
SVG to ICO Converter for Art Collection
Converts the logo.svg to favicon.ico with multiple sizes
"""

from PIL import Image
import cairosvg
import io

def svg_to_ico(svg_path, ico_path, sizes=[16, 32, 48, 64, 128, 256]):
    """
    Convert SVG to ICO with multiple sizes

    Args:
        svg_path: Path to input SVG file
        ico_path: Path to output ICO file
        sizes: List of icon sizes to include
    """
    print(f"🎨 Converting {svg_path} to {ico_path}...")

    # Read SVG file
    with open(svg_path, 'rb') as f:
        svg_data = f.read()

    # Create images for each size
    images = []
    for size in sizes:
        print(f"  ✓ Generating {size}x{size} icon...")

        # Convert SVG to PNG at specific size
        png_data = cairosvg.svg2png(
            bytestring=svg_data,
            output_width=size,
            output_height=size
        )

        # Create PIL Image from PNG data
        img = Image.open(io.BytesIO(png_data))
        images.append(img)

    # Save as ICO with all sizes
    images[0].save(
        ico_path,
        format='ICO',
        sizes=[(img.width, img.height) for img in images],
        append_images=images[1:]
    )

    print(f"✨ Successfully created {ico_path}")
    print(f"   Sizes included: {', '.join(f'{s}x{s}' for s in sizes)}")

if __name__ == '__main__':
    import os

    # Paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    svg_path = os.path.join(script_dir, 'public', 'logo.svg')
    ico_path = os.path.join(script_dir, 'public', 'favicon.ico')

    # Check if SVG exists
    if not os.path.exists(svg_path):
        print(f"❌ Error: {svg_path} not found!")
        exit(1)

    # Convert
    try:
        svg_to_ico(svg_path, ico_path)
        print("\n🎉 Conversion complete!")
    except Exception as e:
        print(f"\n❌ Error during conversion: {e}")
        print("\n💡 Make sure you have the required dependencies:")
        print("   pip install Pillow cairosvg")
        exit(1)
