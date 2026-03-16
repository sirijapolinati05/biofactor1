import logo from "@/assets/images/logo.png";
import { Mail, Phone, MapPin, CheckCircle, Leaf, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[radial-gradient(circle_at_20%_30%,#0f5132,#062f24)] text-[#a8e6cf]"
    >

      <div className="max-w-7xl mx-auto px-6 pt-4 pb-8">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Biofactor"
                className="h-9 w-9 object-contain"
              />

              <span className="text-xl font-semibold text-white">
                Biofactor Biologicals
              </span>
            </div>

            <p className="text-sm text-[#a8e6cf]/80 leading-relaxed mb-6">
              Premium biofactor solutions for sustainable
              agriculture and animal health
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm">

              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#7ef3c6]" />
                GMP Certified
              </div>

              <div className="flex items-center gap-2">
                <Award size={16} className="text-[#7ef3c6]" />
                ISO 9001:2015
              </div>

              <div className="flex items-center gap-2">
                <Leaf size={16} className="text-[#7ef3c6]" />
                Organic Certified
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#7ef3c6]" />
                Research Backed
              </div>

            </div>

          </div>

          {/* Products */}
          <div>

            <h4 className="font-semibold text-lg text-white mb-4">
              Products
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="#" className="hover:text-white transition">
                  Agriculture
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Aquaculture
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Large Animals
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Kitchen Gardening
                </a>
              </li>

            </ul>

          </div>

          {/* Customer Care */}
          <div>

            <h4 className="font-semibold text-lg text-white mb-4">
              Customer Care
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="#" className="hover:text-white transition">
                  Customer Care
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Orders
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Cart
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Checkout
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="font-semibold text-lg text-white mb-4">
              Customer Care
            </h4>

            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#7ef3c6] mt-0.5"/>
                <span>
                  Biofac Inputs Private limited
                  <br />
                  Hyderabad, Telangana
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#7ef3c6]" />
                +91 88866 24775
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#7ef3c6]" />
                info@biofactor.com
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#0e5f46]/60"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-[#8ddfc0]">

        © 2026 Biofac Inputs Private Limited. All rights reserved.

        <div className="flex justify-center gap-8 mt-3 text-xs">

          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>

          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-white transition">
            Shipping & Delivery
          </a>

          <a href="#" className="hover:text-white transition">
            Returns & Refunds
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
