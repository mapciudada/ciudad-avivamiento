import { Instagram, Facebook, Youtube, Linkedin, Send, MessageCircle } from "lucide-react";

export default function SocialBar() {
  
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/584120000000", // ⚠️ Recuerda poner el número real
      icon: <MessageCircle size={24} strokeWidth={1.5} />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ciudadavivamiento/",
      icon: <Instagram size={24} strokeWidth={1.5} />
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@profetajecxonperez",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/ciudadavivamiento",
      icon: <Facebook size={24} strokeWidth={1.5} />
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com/ciudadavivamiento",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@PastorJecxonPerezOficial-1",
      icon: <Youtube size={26} strokeWidth={1.5} />
    },
    {
      name: "Telegram",
      url: "https://t.me/ciudadavivamiento",
      icon: <Send size={24} strokeWidth={1.5} />
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ciudadavivamiento",
      icon: <Linkedin size={24} strokeWidth={1.5} />
    }
  ];

  return (
    <div className="bg-[#050505] py-16 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* CAMBIO: Ahora usamos 'text-white' para que se vea claro y nítido */}
        <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-10">
          SÍGUENOS EN REDES
        </h3>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 text-white/40">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="hover:text-[#FFE800] hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}