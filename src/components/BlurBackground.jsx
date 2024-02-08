const BlurBackground = () => {
  const style = "absolute blur-[100px] w-[50vw] h-[50vh]";
  const styles = [
    `${style} bg-[rgba(5,0,240,.25)] left-[0rem] -top-[0rem]`,
    `${style} bg-[rgba(240,202,0,.25)]  -right-[0rem] -top-[0rem]`,
    `${style} bg-[rgba(149,0,240,.25)] -right-[0rem] top-[10rem]`,
    `${style} bg-[rgba(240,0,216,.25)]  -left-[0rem] top-[10rem]`,
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
