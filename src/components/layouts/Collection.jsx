import Button from "../Button";
import Container from "../Container";
import Image from "../Image";
import womenscollection from "../../assets/womenscollection.png"
import mensss from "../../assets/mensss.png"
import kidscollection from "../../assets/kidscollection.png"
import giftcard from "../../assets/giftcard.png"





const Collection = () => {
  return (
    <>
      <section className="mt-25">
        <Container>
          <div className="grid md:grid-cols-2 gap-7.5 overflow-hidden items-start">
            <div className="relative group overflow-hidden">
              <Image className={""} imgSrc={womenscollection} />
              <div className=" absolute bottom-10 left-10  w-[134px] md:w-full">
                <p className="text-[14px] text-[#222222] leading-6 font-Jost">HOT LIST</p>
                <h3 className="text-[22px] md:text-[26px] font-medium text-[#222222] font-Jost pb-[5px]">
                  <span className="font-bold font-Jost">WOMEN </span>
                  COLLECTION
                </h3>
                <Button className={"text-[14px] font-medium beforeAfterBlack"} btnText={"SHOP NOW"} />
              </div>
            </div>
            <div className="md:flex-wrap flex flex-col ">
              <div className="relative group overflow-hidden">
                <Image className={"h-[285px] md:h-auto "} imgSrc={mensss} />
                <div className="absolute md:bottom-10 bottom-10 left-10 w-[134px] md:w-full">
                  <p className="text-[14px] text-[#222222] leading-6 font-Jost">HOT LIST</p>
                  <h3 className="text-[22px] md:text-[26px] font-medium text-[#222222] font-Jost pb-[5px]">
                    <span className="font-bold font-Jost">MEN</span>{" "}
                    COLLECTION
                  </h3>
                  <Button
                    className={"text-[14px] font-medium beforeAfterBlack"}
                    btnText={"SHOP NOW"}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-7.5 gap-7.5">
                <div className="relative group overflow-hidden">
                  <Image className={""} imgSrc={kidscollection} />
                  <div className="absolute bottom-10 left-10 w-[134px] md:w-full">
                    <p className="text-[14px] text-[#222222] leading-6 font-Jost">HOT LIST</p>
                    <h3 className="text-[22px] md:text-[26px] font-medium text-[#222222] font-Jost pb-[5px]">
                      <span className="font-bold font-Jost">KIDS</span>{" "}
                      COLLECTION
                    </h3>
                    <Button
                      className={"text-[14px] font-medium beforeAfterBlack"}
                      btnText={"SHOP NOW"}
                    />
                  </div>
                </div>
                <div className="relative group overflow-hidden">
                  <Image className={""} imgSrc={giftcard} />
                  <div className="absolute bottom-10 left-10 ">
                    <h3 className="text-[22px] md:text-[26px] font-medium font-Jost">
                      <span className="font-bold font-Jost">E-GIFT</span>{" "}
                      CARDS
                    </h3>
                    <p className="text-[14px] text-[#222222] pt-2 pb-4">
                      Surprise someone with the gift they really want.
                    </p>
                    <Button
                      className={"text-[14px] font-medium beforeAfterBlack"}
                      btnText={"DISCOVER MORE"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Collection;