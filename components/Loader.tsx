const Loader = () => (
  <div className="ball-scale-ripple">
    <div></div>
    <style jsx>
      {`
        @keyframes ball-scale-ripple {
          0% {
            transform: scale(0.1);
            opacity: 1;
          }
          70% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            opacity: 0;
          }
        }
        .ball-scale-ripple > div {
          margin: 10px auto;
          animation-fill-mode: both;
          height: 50px;
          width: 50px;
          border-radius: 100%;
          border: 2px solid black;
          animation: ball-scale-ripple 1s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
        }
      `}
    </style>
  </div>
)

export default Loader
