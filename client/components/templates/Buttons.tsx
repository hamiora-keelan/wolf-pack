type Props = {
    text: string;
    onClick: () => void;
  };
  
  export const BlackButton: React.FC<Props> = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="w-full md:w-auto bg-black text-white py-2 px-16 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50"
      >
        {text}
      </button>
    );
  };
  
  export const NoColorButton: React.FC<Props> = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="w-full md:w-auto text-black py-2 px-16 rounded-full hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50"
      >
        {text}
      </button>
    );
  };