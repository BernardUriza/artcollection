#!/usr/bin/env python3
"""
Simpler PNG-based icon generator for Art Collection
Creates PNG versions and favicon.ico
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_icon_png(size, output_path):
    """Create a PNG icon with the Art Collection design"""
    # Create image with dark background
    img = Image.new('RGB', (size, size), color='#1a1a2e')
    draw = ImageDraw.Draw(img)

    # Calculate scaling
    scale = size / 512

    # Background gradient (simulated)
    for y in range(size):
        color_val = int(26 + (y / size) * 15)  # Gradient from #1a1a2e to darker
        draw.line([(0, y), (size, y)], fill=(color_val, color_val, color_val + 14))

    # Draw the "A" shape
    center_x = size // 2
    top_y = int(140 * scale)
    bottom_y = int(380 * scale)

    # Left stroke
    points_left = [
        (int(180 * scale), bottom_y),
        (center_x, top_y),
        (int(280 * scale), top_y),
        (int(200 * scale), bottom_y)
    ]
    draw.polygon(points_left, fill='#ff6b6b')

    # Right stroke
    points_right = [
        (int(280 * scale), top_y),
        (int(356 * scale), bottom_y),
        (int(332 * scale), bottom_y),
        (center_x, top_y)
    ]
    draw.polygon(points_right, fill='#ffd93d')

    # Cross bar
    bar_y = int(280 * scale)
    bar_height = int(20 * scale)
    draw.rectangle(
        [int(220 * scale), bar_y, int(316 * scale), bar_y + bar_height],
        fill='#4ecdc4'
    )

    # Paint palette circles
    circles = [
        (int(140 * scale), int(200 * scale), int(20 * scale), '#ff6b6b'),
        (int(160 * scale), int(160 * scale), int(16 * scale), '#ffd93d'),
        (int(372 * scale), int(200 * scale), int(20 * scale), '#4ecdc4'),
        (int(352 * scale), int(160 * scale), int(16 * scale), '#a78bfa'),
    ]

    for x, y, r, color in circles:
        draw.ellipse([x - r, y - r, x + r, y + r], fill=color)

    # Top accent dot
    dot_r = int(8 * scale)
    draw.ellipse([center_x - dot_r, int(100 * scale) - dot_r,
                  center_x + dot_r, int(100 * scale) + dot_r], fill='#ffd93d')

    # Save
    img.save(output_path, 'PNG')
    print(f"  ✓ Created {output_path} ({size}x{size})")

def create_favicon_ico(png_paths, ico_path):
    """Create ICO from multiple PNG files"""
    images = [Image.open(path) for path in png_paths]

    images[0].save(
        ico_path,
        format='ICO',
        sizes=[(img.width, img.height) for img in images],
        append_images=images[1:]
    )

    print(f"✨ Created {ico_path}")

if __name__ == '__main__':
    script_dir = os.path.dirname(os.path.abspath(__file__))
    public_dir = os.path.join(script_dir, 'public')

    print("🎨 Generating Art Collection icons...")

    # Create PNG icons
    sizes = [16, 32, 48, 64, 128, 192, 256, 512]
    png_paths = []

    for size in sizes:
        png_path = os.path.join(public_dir, f'icon-{size}.png')
        create_icon_png(size, png_path)
        png_paths.append(png_path)

    # Create favicon.ico from first 6 sizes
    ico_path = os.path.join(public_dir, 'favicon.ico')
    create_favicon_ico(png_paths[:6], ico_path)

    print("\n🎉 Icon generation complete!")
    print(f"   Generated {len(sizes)} PNG icons and favicon.ico")
