// import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aqpan.kz</h3>
            <p className="text-gray-400">Мы создаем сайты, которые продают и помогают бизнесу расти в digital-пространстве.</p>
          </div>
          
          {/* Остальное содержимое компонента Footer */}
        </div>
      </div>
    </footer>
  )
}
