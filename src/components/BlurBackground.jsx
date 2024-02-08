const BlurBackground = () => {
  const style = "w-[55vw] h-[50vh] rounded-full absolute blur-[100px]";
  const styles = [
    `${style} bg-[rgba(5,0,240,.2)] rotate-[10deg] -left-[3rem] -top-[2rem]`,
    `${style} bg-[rgba(240,202,0,.2)] -rotate-[10deg] -right-[3rem] -top-[2rem]`,
    `${style} bg-[rgba(149,0,240,.2)] rotate-[10deg] -right-[3rem] top-[10rem]`,
    `${style} bg-[rgba(240,0,216,.2)] -rotate-[10deg] -left-[3rem] top-[10rem]`,
  ];
  return (
    <div className="select-none ">
      {styles.map((style, index) => (
        <div key={index} className={style}></div>
      ))}
    </div>
  );
};

export default BlurBackground;
