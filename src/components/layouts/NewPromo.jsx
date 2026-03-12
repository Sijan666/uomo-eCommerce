import Container from "../Container";
import FeaturedProducts from "../FeatureProduct";
import feaureProducts from "../../assets/feaureProducts.png"

const NewPromo = () => {
  return (
    <>
      <section className="mt-25">
        <Container>
          <div className="grid grid-cols-2 gap-7.5">
            <FeaturedProducts
              imgSrc={feaureProducts}
              imgAlt={feaureProducts}
              price={"STARTING AT $19"}
              category={"Men’s T-Shirts"}
            />
            <FeaturedProducts
              imgSrc={feaureProducts}
              imgAlt={feaureProducts}
              price={"STARTİNG AT $39"}
              category={"Men’s Sportswear"}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default NewPromo
