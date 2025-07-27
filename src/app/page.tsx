import Link from "next/link";

const mockUrls = [
  "https://km97od46ha.ufs.sh/f/DcLwPfAWwKlvxDM9U7mgvdyZFinEMRUbw3G0PB8rgj19polW",
  "https://km97od46ha.ufs.sh/f/DcLwPfAWwKlvuNJi8rmhBWgAC6zr01ubNvyQZ4SHd9xfRioX",
  "https://km97od46ha.ufs.sh/f/DcLwPfAWwKlvp9rOqixM2SZrJOsFz4mhqKotkc39AY5XWPb1",
  "https://km97od46ha.ufs.sh/f/DcLwPfAWwKlvIzoBgZhsLnCDr8TZoOKkPEtvQbycS1wW5NhG",
  "https://km97od46ha.ufs.sh/f/DcLwPfAWwKlv54FJBm6oejwfVLHUygQOlz03cP6DtxIivCGY",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                className="h-48 w-48 object-cover"
              />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
