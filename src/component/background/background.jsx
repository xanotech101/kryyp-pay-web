import Image from 'next/image'; 


const ScatteredBackground = () => {
  const images = [  
    { src: '/etherum.svg', top: '10%', left: '20%', rotate: '10deg', bgColor: 'bg-[#5A28B060]'},
    { src: '/etherum.svg', top: '30%', left: '50%', bgColor: 'bg-[#5A28B060]' },
    { src: '/bitcoin.svg', top: '60%', left: '10%', bgColor: 'bg-[#FEE71560]' },
    { src: '/etherum.svg', top: '80%', left: '70%', bgColor: 'bg-[#5A28B060]' },
    { src: '/bitcoin.svg', top: '40%', left: '80%', bgColor: 'bg-[#FEE71560]' },
  ];

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none bg-lighbg dark:bg-darkbg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt=""
          className={`absolute w-[58px] h-[58px] rounded-full opacity-30 ${img.bgColor}`}
          style={{ top: img.top, left: img.left }}
        />
      ))}
    </div>
  );
};

export default ScatteredBackground;
