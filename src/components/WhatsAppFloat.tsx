export const WhatsAppFloat = () => {
  const phoneNumber = '34600500400'; // Format: country code + number without +
  const message = encodeURIComponent('Hola! Estoy interesado en los apartamentos Coroa Silence');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fade-in"
      aria-label="Contact on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="w-8 h-8" fill="currentColor">
        <path d="M16.03 4.01A11.88 11.88 0 0 0 5.78 21.9L4 28l6.28-1.65a11.86 11.86 0 0 0 5.75 1.46h.01A11.9 11.9 0 0 0 16.03 4.01Zm0 21.78h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 1 1 8.36 4.6Zm5.4-7.39c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
};
