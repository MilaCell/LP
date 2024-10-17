export const DiagonalDivisionTopLeft = () => {
  return (
    <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1921.875 229.437"
          preserveAspectRatio="none"
          className="w-full h-[150px]"
        >
          <polygon fill="#070708" points="0,229.437 1921.875,0 0,0 " />
        </svg>
      </div>
  );
};

export const DiagonalDivisionTopRight = () => {
  return (
    <div className="w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1921.875 229.437"
        preserveAspectRatio="none"
        className="w-full h-[150px]"
      >
        <polygon fill="#070708" points="1921.875,229.437 0,0 1921.875,0 " />
      </svg>
    </div>
  );
};

export const DiagonalDivisionBottomLeft = () => {
  return (
    <div className="w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1921.875 229.437"
        preserveAspectRatio="none"
        className="w-full h-[150px]"
      >
        {/* A parte de cima é transparente, a parte de baixo é preta */}
        <polygon fill="#070708" points="0,229.437 1921.875,0 1921.875,229.437" />
      </svg>
    </div>
  )
}