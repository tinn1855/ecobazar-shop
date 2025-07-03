export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-5 pt-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-28">
          <section className="md:w-1/3">
            <img src="/img/logo-white.png" alt="Ecobazar Logo" />
            <p className="text-gray-500 py-4">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <address className="not-italic text-sm">
              <div className="flex gap-2 items-center">
                <a
                  href="tel:+2195550114"
                  className="border-b-2 border-primary font-medium"
                >
                  (219) 555-0114
                </a>
                <span className="text-gray-300">or</span>
                <a
                  href="mailto:Proxy@gmail.com"
                  className="border-b-2 border-primary font-medium"
                >
                  Proxy@gmail.com
                </a>
              </div>
            </address>
          </section>
          <nav
            aria-label="Footer Navigation"
            className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10"
          >
            <section>
              <h2 className="font-medium text-lg mb-4">My Account</h2>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a className="hover:text-white" href="/">
                    My Account
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/order-history">
                    Order History
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/cart">
                    Shopping Cart
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/wishlist">
                    Wishlist
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="font-medium text-lg mb-4">Helps</h2>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a className="hover:text-white" href="/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/faqs">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/terms">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/privacy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="font-medium text-lg mb-4">Proxy</h2>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a className="hover:text-white" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/shop">
                    Shop
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/products">
                    Product
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/track-order">
                    Track Order
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="font-medium text-lg mb-4">Categories</h2>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a
                    className="hover:text-white"
                    href="/categories/fruit-vegetables"
                  >
                    Fruit & Vegetables
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/categories/meat-fish">
                    Meat & Fish
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/categories/bakery">
                    Bread & Bakery
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white"
                    href="/categories/beauty-health"
                  >
                    Beauty & Health
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </div>
        <hr className="border-gray mt-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-5 text-sm">
          <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <div className="flex gap-2">
            <img src="/img/payment/apple-pay.png" alt="Apple Pay Logo" />
            <img src="/img/payment/visa.png" alt="Visa Logo" />
            <img src="/img/payment/discover.png" alt="Discover Logo" />
            <img src="/img/payment/mastercard.png" alt="Mastercard Logo" />
            <img
              src="/img/payment/secure-payment.png"
              alt="Secure Payment Icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
