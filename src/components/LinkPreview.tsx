
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ExternalLink, Zap, Star } from "lucide-react";

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
      
      // Simulate fetching website metadata with more realistic data
      setPreview({
        title: `${domain.charAt(0).toUpperCase() + domain.slice(1)} - Professional Platform`,
        description: `Bu ${domain} professional veb-platformasidir. Zamonaviy texnologiyalar va foydalanuvchi-do'st interfeys bilan yaratilgan. Platform orqali turli xizmatlar va professional imkoniyatlarni kashf eting.`,
        image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format`,
        domain: domain
      });
    } catch (error) {
      console.error("Invalid URL:", error);
    }
  }, [url]);

  return (
    <div className="mb-16 animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-semibold text-white">
            Live Preview Demo
          </h3>
        </div>
        <p className="text-gray-400 text-lg">Real-time veb-sayt ko'rinishi va tahlili</p>
      </div>
      
      <Card className="bg-black/50 backdrop-blur-xl border-gray-700/50 hover:bg-gray-900/50 transition-all duration-500 max-w-4xl mx-auto group hover:scale-105">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                {preview.domain}
              </Badge>
            </div>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 transform duration-200"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {preview.image && (
            <div className="w-full h-64 bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-purple-500/30 transition-colors">
              <img 
                src={preview.image} 
                alt="Website preview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          
          <div className="space-y-4">
            <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
              {preview.title}
            </CardTitle>
            <CardDescription className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
              {preview.description}
            </CardDescription>
          </div>
          
          <div className="pt-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm break-all flex-1 mr-4"
              >
                {url}
              </a>
              <Badge className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 border-green-500/30">
                Live Preview
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkPreview;
