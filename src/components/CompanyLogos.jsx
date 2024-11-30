import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Neptune By the Numbers
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <div
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <div>
              <h2 className="text-center h5">{logo.title}</h2>
              <p className="text-center body-2 text-n-3">{logo.description}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
