import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Shield,
  Cpu,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card pt-16 pb-6 px-4 sm:px-6 lg:px- border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand + Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-extrabold select-none tracking-tight">
                <span className="text-primary">CEC Okigwe</span>
              </h3>
            </div>
            <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
              Catholic Education Commission, Okigwe Diocese, Imo State, Nigeria.
              Providing quality education and faith formation to students across
              the diocese through our network of Catholic schools.
            </p>

            {/* Technology branding */}
            <div className="flex flex-col gap-2 mb-4 text-xs text-foreground/60">
              <div className="flex items-center gap-1">
                <Cpu className="w-3 h-3" />
                <span>Powered by</span>
                <span className="font-semibold text-primary">i3Hub</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                <span>Secured by</span>
                <span className="font-semibold text-secondary">I3SecureID</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="hover:text-primary transition"
                >
                  Registration
                </a>
              </li>
              <li>
                <a href="#subjects" className="hover:text-primary transition">
                  Subjects
                </a>
              </li>
              <li>
                <a
                  href="#instructions"
                  className="hover:text-primary transition"
                >
                  How to Register
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" /> +234 803 456 7890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" /> cec.okigwe@catholic.org.ng
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> Okigwe Diocese, Imo
                State, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 border-t border-gray-200 text-center text-foreground/60 text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} Catholic Education Commission, Okigwe
            Diocese. Powered by{" "}
            <span className="font-semibold text-primary">i3Hub</span> · Secured
            by <span className="font-semibold text-secondary">I3SecureID</span>.{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
