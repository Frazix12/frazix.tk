const Fonts = () => (
  <style jsx global>{`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #212329;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #16171a;
    }
  `}</style>
)
export default Fonts
