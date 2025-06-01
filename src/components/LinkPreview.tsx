
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ExternalLink } from "lucide-react";

interface LinkPreviewProps {
  url: string;
}

const LinkPreview = ({ url }: LinkPreviewProps) => {
  const [preview, setPreview] = useState({
    title: "",
    description: "",
    image: "",
    domain: ""
  });

  useEffect(() => {
    // Extract domain from URL
    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname;
      
      // Simulate fetching website metadata
      // In a real app, you would use a service to get actual metadata
      setPreview({
        title: `${domain.charAt(0).toUpperCase() + domain.slice(1)} - Veb-sayt`,
        description: `Bu ${domain} veb-saytining tavsifi. Ushbu platforma orqali turli xizmatlar va ma'lumotlarni olishingiz mumkin.`,
        image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop`,
        domain: domain
      });
    } catch (error) {
      console.error("Invalid URL:", error);
    }
  }, [url]);

  return (
    <div className="mb-12 animate-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-2xl font-semibold text-white mb-6 text-center">
        Veb-sayt ko'rinishi
      </h3>
      <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 max-w-2xl mx-auto">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <Badge variant="outline" className="bg-blue-500/20 text-blue-200 border-blue-400/30">
                {preview.domain}
              </Badge>
            </div>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {preview.image && (
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={preview.image} 
                alt="Website preview" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <CardTitle className="text-xl text-white mb-2">
              {preview.title}
            </CardTitle>
            <CardDescription className="text-gray-300 leading-relaxed">
              {preview.description}
            </CardDescription>
          </div>
          <div className="pt-2">
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm break-all"
            >
              {url}
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkPreview;
