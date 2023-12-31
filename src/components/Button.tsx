import { cn } from '@utils/cn';

function ButtonContent({ type, title }: Omit<ButtonProps, 'href'>) {
  const iconClasses = 'fill-[rgb(var(--orange))] group-hover:fill-[rgb(var(--white))]';

  return (
    <>
      {Boolean(type) && (
        <div className="w-[26px] h-[26px] mr-4">
          {type === 'Apple' ? (
            <svg
              viewBox="0 0 430.117 430.117"
              className={iconClasses}
            >
              <path d="M0,258.734v-58.366c0-5.346,4.392-9.719,9.772-9.719H112.91l-44.904,77.817H9.772   C4.392,268.466,0,264.102,0,258.734z M73.469,378.249l-32.915,22.3c-4.429,3.01-7.561,1.105-6.947-4.21l4.392-38.153   c0.611-5.315,4.921-7.486,9.582-4.83l25.473,14.552C77.707,370.577,77.898,375.248,73.469,378.249z M81.373,356.743l-25.473-14.557   c-4.657-2.66-6.298-8.625-3.589-13.264l117.954-204.469c2.676-4.646,8.708-6.275,13.362-3.58l25.473,14.519   c4.66,2.695,6.259,8.665,3.589,13.294L94.737,353.169C92.065,357.808,86.028,359.399,81.373,356.743z M171.144,268.466   l44.904-77.817h25.856l36.463,77.817H171.144z M317.394,291.688c-10.197-5.092-60.984-121.752-73.996-152.19   c-13.026-30.439-52.358-111.462-39.635-117.767c9.049-4.52,41.543,59.281,65.902,97.584   c24.324,38.305,75.19,137.068,81.449,148.315c6.227,11.276-5.992,20.676-12.787,23.49   C331.525,293.934,327.587,296.739,317.394,291.688z M350.768,345.31l-15.345-24.134c-3.174-5.022-1.526-11.22,3.621-13.866   l14.627-7.49c5.157-2.623,11.612-0.495,14.356,4.756l12.105,23.181c2.754,5.241,0.878,11.972-4.088,14.935l-10.459,6.227   C360.62,351.918,353.941,350.284,350.768,345.31z M407.244,408.613c-3.206-10.226-27.685-10.902-38.644-26.299   c-10.995-15.346-1.908-23.252,1.909-26.901C414.959,330.486,407.244,408.613,407.244,408.613z M430.117,258.734   c0,5.367-4.391,9.731-9.772,9.731h-51.627c-0.569-3.001-1.493-6.002-3.053-8.816c-1.344-2.395-4.741-8.854-9.474-17.856   c-6.833-12.993-16.647-31.575-27.153-51.144h91.302c5.382,0,9.773,4.373,9.773,9.719v58.366H430.117z" />
            </svg>
          ) : (
            type === 'Google' && (
              <svg
                viewBox="0 0 210 210"
                className={iconClasses}
              >
                <path d="M190.32,90.03L36.784,2.266C34.137,0.754,31.19,0,28.243,0c-0.06,0-0.119,0.008-0.178,0.008  c-0.396,0.004-0.791,0.024-1.185,0.055c-0.178,0.014-0.355,0.033-0.533,0.053c-0.308,0.034-0.615,0.077-0.921,0.128  c-0.111,0.019-0.223,0.025-0.334,0.046l0.006,0.008c-1.913,0.353-3.78,1.027-5.515,2.034c-5.314,3.083-8.585,8.762-8.585,14.905  v175.527c0,6.143,3.271,11.822,8.585,14.905c1.734,1.007,3.601,1.682,5.514,2.035l-0.005,0.007c0.1,0.019,0.201,0.025,0.3,0.041  c0.329,0.056,0.659,0.102,0.99,0.137c0.166,0.018,0.331,0.036,0.497,0.049c0.389,0.031,0.777,0.049,1.167,0.054  c0.066,0.001,0.131,0.009,0.197,0.009c2.947,0,5.894-0.754,8.541-2.266L190.32,119.97c5.368-3.069,8.681-8.777,8.681-14.962  c0,0,0-0.003,0-0.004c0,0,0-0.003,0-0.004c0,0,0-0.003,0-0.004c0,0,0-0.003,0-0.004C199.001,98.808,195.688,93.1,190.32,90.03z   M129.602,72.601l-15.266,20.027L75.496,41.672L129.602,72.601z M182.876,106.947l-107.38,61.381l67.234-88.206l40.145,22.947  c0.695,0.397,1.127,1.141,1.127,1.938C184.001,105.807,183.569,106.551,182.876,106.947z" />
              </svg>
            )
          )}
        </div>
      )}
      <span className="text-[rgb(var(--orange))] group-hover:text-[rgb(var(--white))] font=[var(--font-rubik)]">
        {title}
      </span>
    </>
  );
}

export function Button({ title, href, type }: ButtonProps) {
  const buttonClasses = cn(
    'group w-full h-[60px] flex items-center content-center mb-2 px-4 py-2 last:mb-0',
    'rounded-lg appearance-none bg-white cursor-pointer',
    'lg:content-start lg:w-auto lg:mb-0 lg:mr-2 lg:last:mr-0 lg:hover:bg-[rgb(var(--orangeLight))] lg:transition-colors',
  );

  if (href) {
    return (
      <a
        className={buttonClasses}
        href={href}
        target="_blank"
        rel="noopener"
      >
        <ButtonContent {...{ title, type }} />
      </a>
    );
  }

  return (
    <button className={buttonClasses}>
      <ButtonContent {...{ title, type }} />
    </button>
  );
}

type ButtonProps = {
  title: string;
  href?: string;
  type?: 'Apple' | 'Google';
};
