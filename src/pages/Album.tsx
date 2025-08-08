import React, { useEffect, useMemo, useRef, useState } from "react";
import heroImage from "@/assets/lucymaw.jpg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Camera, Image as ImageIcon, PlayCircle, Plus, Video as VideoIcon, X } from "lucide-react";

type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  createdAt: number;
};

const Album: React.FC = () => {
  const [items, setItems] = useState<MediaItem[]>(() => [
    { id: crypto.randomUUID(), type: "image", src: heroImage, createdAt: Date.now() - 10000 },
  ]);
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<MediaItem | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const imageCount = useMemo(() => items.filter(i => i.type === "image").length, [items]);
  const videoCount = useMemo(() => items.filter(i => i.type === "video").length, [items]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Álbum de boda – Lucy & Maw";

    // Meta description
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Álbum compartido de boda en verde salvia: sube y disfruta fotos y videos de Lucy y Maw.";

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/album";

    return () => {
      document.title = prevTitle;
    };
  }, []);

  const onUploadClick = () => inputRef.current?.click();

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);

    const newItems: MediaItem[] = [];
    for (const file of Array.from(files)) {
      const url = URL.createObjectURL(file);
      const isVideo = file.type.startsWith("video");
      newItems.push({ id: crypto.randomUUID(), type: isVideo ? "video" : "image", src: url, createdAt: Date.now() });
    }

    // Simulate small processing delay for loader visibility
    await new Promise(res => setTimeout(res, Math.min(800, 200 * newItems.length)));

    setItems(prev => [...newItems, ...prev]);
    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const openLightbox = (item: MediaItem) => {
    setCurrent(item);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Portada del álbum de boda de Lucy y Maw"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* Bottom gradient to integrate with page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        {/* Title over gradient */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-elegant text-3xl md:text-5xl font-semibold drop-shadow-sm">
              Álbum de boda — Lucy & Maw
            </h1>
            <p className="text-muted-foreground mt-2">Comparte y revive cada momento especial</p>
          </div>
        </div>
      </header>

      {/* Toolbar - minimal, sticky */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Button onClick={onUploadClick} variant="secondary" size="sm" className="gap-2">
                <Plus className="w-4 h-4" /> Subir
              </Button>
              <input
                ref={inputRef}
                type="file"
                accept="image/*,video/*"
                multiple
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
              {uploading && (
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-block h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" aria-hidden="true" />
                  Procesando archivos...
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 text-sm">
                <ImageIcon className="w-4 h-4 text-foreground/80" />
                <Badge variant="secondary" className="rounded-full px-2 py-0.5">{imageCount}</Badge>
              </div>
              <div className="inline-flex items-center gap-2 text-sm">
                <VideoIcon className="w-4 h-4 text-foreground/80" />
                <Badge variant="secondary" className="rounded-full px-2 py-0.5">{videoCount}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section aria-label="Galería de fotos y videos">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative aspect-square overflow-hidden rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label={item.type === "image" ? "Ver foto" : "Reproducir video"}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt="Miniatura de foto del álbum"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full relative">
                    <video
                      src={item.src}
                      className="h-full w-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <PlayCircle className="absolute inset-0 m-auto text-primary drop-shadow w-10 h-10" />
                  </div>
                )}
              </button>
            ))}

            {/* Uploading placeholder blocks */}
            {uploading && (
              <div className="aspect-square rounded-md bg-muted animate-pulse" />
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-2 sm:p-4 border-0 bg-transparent shadow-none [&>button]:hidden">
          <DialogHeader>
            <DialogTitle className="sr-only">Contenido multimedia</DialogTitle>
          </DialogHeader>
          {current && (
            <div className="relative">
              {current.type === "image" ? (
                <img
                  src={current.src}
                  alt="Foto ampliada del álbum"
                  className="max-h-screen w-auto max-w-full object-contain rounded-md mx-auto"
                />
              ) : (
                <video
                  src={current.src}
                  className="w-full h-full rounded-md"
                  controls
                  autoPlay
                  playsInline
                />
              )}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 inline-flex items-center justify-center rounded-full bg-background/70 p-1.5 text-foreground shadow hover:bg-background"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer note */}
      <footer className="px-4 pb-10">
        <div className="max-w-6xl mx-auto text-center text-xs text-muted-foreground">
          Consejo: puedes subir imágenes y videos desde tu celular. Tus archivos se muestran al instante.
        </div>
      </footer>
    </div>
  );
};

export default Album;
