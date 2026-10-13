import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
const phoneNumber = '923178600047'
const message = encodeURIComponent(
'Assalam-o-Alaikum, I have a query/complaint regarding WASA Jhang.'
)

return (
<a
href={`https://wa.me/${phoneNumber}?text=${message}`}
target="_blank"
rel="noopener noreferrer"
aria-label="Contact WASA Jhang on WhatsApp"
className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg transition hover:scale-110 hover:bg-[#1DA851]"
> <FaWhatsapp /> </a>
)
}

export default WhatsAppButton
