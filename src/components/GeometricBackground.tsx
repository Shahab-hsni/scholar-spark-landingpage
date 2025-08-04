import React from 'react';

interface GeometricBackgroundProps {
  className?: string;
  opacity?: number;
}

export const GeometricBackground: React.FC<GeometricBackgroundProps> = ({
  className = '',
  opacity = 0.1,
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 973 973"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        style={{ opacity }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_613_3580)">
          <g opacity="0.6">
            <path opacity="0.3" d="M486.5 486.5V291.9" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.5 486.5L655.024 389.2"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.5 486.5L655.024 583.8"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path opacity="0.3" d="M486.5 486.5V681.1" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.502 486.5L317.979 583.8"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.502 486.5L317.979 389.2"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path opacity="0.3" d="M486.5 486.5V97.3" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.5 486.5L823.547 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.5 486.5L823.547 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path opacity="0.3" d="M486.5 486.5V875.7" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.501 486.5L149.454 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.501 486.5L149.454 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.5 291.9L655.024 389.2"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.5 291.9L655.024 583.8"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path opacity="0.3" d="M486.5 291.9V681.1" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.502 291.9L317.979 583.8"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M486.502 291.9L317.979 389.2"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path opacity="0.3" d="M486.5 291.9V97.3" stroke="white" strokeWidth="2.4325" />
            <path opacity="0.3" d="M486.5 291.9H823.547" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.5 291.9L823.547 681.1"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path opacity="0.3" d="M486.5 291.9V875.7" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.501 291.9L149.454 681.1"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path opacity="0.3" d="M486.501 291.9H149.454" stroke="white" strokeWidth="2.4325" />
            <path opacity="0.3" d="M655.024 389.2V583.8" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M655.024 389.2L486.5 681.1"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M655.026 389.2L317.979 583.8"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M655.026 389.2H317.979"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path opacity="0.3" d="M655.024 389.2L486.5 97.3" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M655.024 389.2L823.548 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M655.024 389.2L823.548 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M655.024 389.2L486.5 875.7"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M655.025 389.2L149.454 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M655.025 389.2L149.454 291.9"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M655.024 583.8L486.5 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M655.026 583.8H317.979"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M655.026 583.8L317.979 389.2"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M655.024 583.8L486.5 97.3"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M655.024 583.8L823.548 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M655.024 583.8L823.548 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M655.024 583.8L486.5 875.7"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M655.025 583.8L149.454 681.1"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M655.025 583.8L149.454 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.502 681.1L317.979 583.8"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.502 681.1L317.979 389.2"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path opacity="0.3" d="M486.5 681.1V97.3" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.5 681.1L823.547 291.9"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path opacity="0.3" d="M486.5 681.1H823.547" stroke="white" strokeWidth="2.4325" />
            <path opacity="0.3" d="M486.5 681.1V875.7" stroke="white" strokeWidth="2.4325" />
            <path opacity="0.3" d="M486.501 681.1H149.454" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.501 681.1L149.454 291.9"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path opacity="0.3" d="M317.979 583.8V389.2" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M317.979 583.8L486.502 97.3"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M317.979 583.8L823.549 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M317.979 583.8L823.549 681.1"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M317.979 583.8L486.502 875.7"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M317.978 583.8L149.454 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M317.978 583.8L149.454 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M317.979 389.2L486.502 97.3"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M317.979 389.2L823.549 291.9"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M317.979 389.2L823.549 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M317.979 389.2L486.502 875.7"
              stroke="white"
              strokeWidth="2.4325"
              strokeDasharray="4.86 4.86"
            />
            <path
              opacity="0.3"
              d="M317.978 389.2L149.454 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M317.978 389.2L149.454 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path opacity="0.3" d="M486.5 97.3L823.547 291.9" stroke="white" strokeWidth="2.4325" />
            <path opacity="0.3" d="M486.5 97.3L823.547 681.1" stroke="white" strokeWidth="2.4325" />
            <path opacity="0.3" d="M486.5 97.3V875.7" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M486.501 97.3L149.454 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.501 97.3L149.454 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path opacity="0.3" d="M823.549 291.9V681.1" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M823.547 291.9L486.5 875.7"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.2"
              d="M823.548 291.9L149.454 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path opacity="0.3" d="M823.548 291.9H149.454" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M823.547 681.1L486.5 875.7"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path opacity="0.3" d="M823.548 681.1H149.454" stroke="white" strokeWidth="2.4325" />
            <path
              opacity="0.3"
              d="M823.548 681.1L149.454 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.501 875.7L149.454 681.1"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path
              opacity="0.3"
              d="M486.501 875.7L149.454 291.9"
              stroke="white"
              strokeWidth="2.4325"
            />
            <path opacity="0.3" d="M149.454 681.1V291.9" stroke="white" strokeWidth="2.4325" />
          </g>
          <path
            d="M486.155 109.145C493.249 109.145 499 103.394 499 96.3C499 89.2058 493.249 83.4548 486.155 83.4548C479.061 83.4548 473.31 89.2058 473.31 96.3C473.31 103.394 479.061 109.145 486.155 109.145Z"
            fill="#7E7CD3"
            stroke="#7E7CD3"
            strokeWidth="2.14087"
          />
          <path
            d="M149.155 304.145C156.249 304.145 162 298.394 162 291.3C162 284.206 156.249 278.455 149.155 278.455C142.061 278.455 136.31 284.206 136.31 291.3C136.31 298.394 142.061 304.145 149.155 304.145Z"
            fill="#7E7CD3"
            stroke="#7E7CD3"
            strokeWidth="2.14087"
          />
          <path
            d="M149.155 694.145C156.249 694.145 162 688.394 162 681.3C162 674.206 156.249 668.455 149.155 668.455C142.061 668.455 136.31 674.206 136.31 681.3C136.31 688.394 142.061 694.145 149.155 694.145Z"
            fill="#7E7CD3"
            stroke="#7E7CD3"
            strokeWidth="2.14087"
          />
          <path
            d="M486.155 888.145C493.249 888.145 499 882.394 499 875.3C499 868.206 493.249 862.455 486.155 862.455C479.061 862.455 473.31 868.206 473.31 875.3C473.31 882.394 479.061 888.145 486.155 888.145Z"
            fill="#7E7CD3"
            stroke="#7E7CD3"
            strokeWidth="2.14087"
          />
          <path
            d="M823.155 694.145C830.249 694.145 836 688.394 836 681.3C836 674.206 830.249 668.455 823.155 668.455C816.061 668.455 810.31 674.206 810.31 681.3C810.31 688.394 816.061 694.145 823.155 694.145Z"
            fill="#7E7CD3"
            stroke="#7E7CD3"
            strokeWidth="2.14087"
          />
          <path
            d="M823.155 305.145C830.249 305.145 836 299.394 836 292.3C836 285.206 830.249 279.455 823.155 279.455C816.061 279.455 810.31 285.206 810.31 292.3C810.31 299.394 816.061 305.145 823.155 305.145Z"
            fill="#7E7CD3"
            stroke="#7E7CD3"
            strokeWidth="2.14087"
          />
          <path
            opacity="0.8"
            d="M487 494C490.866 494 494 490.866 494 487C494 483.134 490.866 480 487 480C483.134 480 480 483.134 480 487C480 490.866 483.134 494 487 494Z"
            fill="#7E7CD3"
          />
          <path
            opacity="0.8"
            d="M486.5 295.549C488.515 295.549 490.149 293.915 490.149 291.9C490.149 289.885 488.515 288.251 486.5 288.251C484.485 288.251 482.852 289.885 482.852 291.9C482.852 293.915 484.485 295.549 486.5 295.549Z"
            fill="#7E7CD3"
          />
          <path
            opacity="0.8"
            d="M655.025 392.849C657.04 392.849 658.673 391.215 658.673 389.2C658.673 387.185 657.04 385.551 655.025 385.551C653.01 385.551 651.376 387.185 651.376 389.2C651.376 391.215 653.01 392.849 655.025 392.849Z"
            fill="#7E7CD3"
          />
          <path
            opacity="0.8"
            d="M655.025 587.449C657.04 587.449 658.673 585.815 658.673 583.8C658.673 581.785 657.04 580.151 655.025 580.151C653.01 580.151 651.376 581.785 651.376 583.8C651.376 585.815 653.01 587.449 655.025 587.449Z"
            fill="#7E7CD3"
          />
          <path
            opacity="0.8"
            d="M486.5 684.749C488.515 684.749 490.149 683.115 490.149 681.1C490.149 679.085 488.515 677.451 486.5 677.451C484.485 677.451 482.852 679.085 482.852 681.1C482.852 683.115 484.485 684.749 486.5 684.749Z"
            fill="#7E7CD3"
          />
          <path
            opacity="0.8"
            d="M317.978 587.449C319.993 587.449 321.627 585.815 321.627 583.8C321.627 581.785 319.993 580.151 317.978 580.151C315.963 580.151 314.329 581.785 314.329 583.8C314.329 585.815 315.963 587.449 317.978 587.449Z"
            fill="#7E7CD3"
          />
          <path
            opacity="0.8"
            d="M317.978 392.849C319.993 392.849 321.627 391.215 321.627 389.2C321.627 387.185 319.993 385.551 317.978 385.551C315.963 385.551 314.329 387.185 314.329 389.2C314.329 391.215 315.963 392.849 317.978 392.849Z"
            fill="#7E7CD3"
          />
        </g>
        <defs>
          <clipPath id="clip0_613_3580">
            <rect width="973" height="973" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default GeometricBackground;
