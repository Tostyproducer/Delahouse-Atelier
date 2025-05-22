import { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-bold">Delahouse Atelier®</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#new" className="hover:underline">Nuevo</a>
          <a href="#collections" className="hover:underline">Colecciones</a>
          <a href="#about" className="hover:underline">Nosotros</a>
          <a href="#contact" className="hover:underline">Contacto</a>
        </nav>
        <div className="flex gap-4 items-center">
          <ShoppingCart onClick={() => setCartOpen(!cartOpen)} className="cursor-pointer" />
          <Menu className="md:hidden cursor-pointer" />
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="h-[80vh] flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <div className="bg-white/70 p-8 rounded-2xl text-center max-w-xl">
          <h2 className="text-4xl font-semibold mb-4">Diseño que refleja tu esencia</h2>
          <p className="mb-6">Moda minimalista con un toque original para jóvenes y adultos contemporáneos.</p>
          <button className="bg-black text-white py-2 px-4 rounded-lg">Tienda Ahora</button>
        </div>
      </motion.section>

      {/* Categorías */}
      <section id="collections" className="grid md:grid-cols-3 gap-6 p-6">
        {['Hombres', 'Mujeres', 'Accesorios'].map((cat) => (
          <div key={cat} className="rounded-2xl overflow-hidden shadow-md cursor-pointer group">
            <div className="h-64 bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-medium">{cat}</h3>
            </div>
          </div>
        ))}
      </section>


{/* Productos Destacados */}
<section className="py-10 px-6">
  <h2 className="text-2xl font-semibold mb-6 text-center">Productos Destacados</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {["product1.jpg", "product2.jpg", "product3.jpg"].map((img, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={`/${img}`} alt="Producto" className="w-full h-96 object-cover" />
        <div className="p-4">
          <h3 className="font-medium text-lg">Producto #{index + 1}</h3>
          <p className="text-sm text-gray-600">Descripción breve del producto.</p>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">Agregar al Carrito</button>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Pop-up Promoción */}
      <motion.div 
        className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}>
        <p className="text-sm">🔥 10% de descuento en tu primera compra. Usa el código: DEBUT10</p>
      </motion.div>

      {/* Pago Seguro y Beneficios */}
      <section className="bg-gray-100 py-8 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h4 className="font-semibold">Pago 100% Seguro</h4>
          <p>Protección SSL y métodos de pago verificados.</p>
        </div>
        <div>
          <h4 className="font-semibold">Envío Rápido</h4>
          <p>Procesamos tu pedido en menos de 48h.</p>
        </div>
        <div>
          <h4 className="font-semibold">Atención Personalizada</h4>
          <p>¿Dudas? Te ayudamos por WhatsApp o Email.</p>
        </div>
      </section>


{/* Testimonios de Clientes */}
<section className="py-10 px-6 bg-gray-50">
  <h2 className="text-2xl font-semibold mb-6 text-center">Lo que dicen nuestros clientes</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      { name: "Andrea M.", text: "Increíble calidad y estilo único. ¡Amo Delahouse!" },
      { name: "Luis R.", text: "La atención al cliente fue excelente. Repetiré sin duda." },
      { name: "Camila F.", text: "La ropa llegó rápido y me encantó el empaque." },
    ].map((review, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow">
        <p className="italic text-gray-700">"{review.text}"</p>
        <p className="mt-4 text-right font-semibold">- {review.name}</p>
      </div>
    ))}
  </div>
</section>


{/* Instagram Feed (Simulado) */}
<section className="py-10 px-6">
  <h2 className="text-2xl font-semibold mb-6 text-center">Síguenos en Instagram @delahouse.atelier</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {["product1.jpg", "product2.jpg", "product3.jpg", "product1.jpg"].map((img, index) => (
      <img key={index} src={`/${img}`} alt="Instagram post" className="rounded-xl object-cover w-full h-48" />
    ))}
  </div>
</section>


      {/* Footer */}
      <footer className="bg-black text-white p-6 mt-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h5 className="font-bold text-lg mb-2">Delahouse Atelier®</h5>
            <p className="text-sm">Moda con identidad. Desde 2025.</p>
          </div>
          <div className="text-sm space-y-2">
            <a href="#" className="block">Términos & Condiciones</a>
            <a href="#" className="block">Política de Privacidad</a>
            <a href="#" className="block">Ayuda & Soporte</a>
          </div>
        </div>
      </footer>

      {/* Carrito de compras */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-end">
          <div className="w-full md:w-[400px] bg-white h-full p-6 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>
            <p>No hay productos aún.</p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
}
