import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import DepositModal from "../../components/Modals/DepositModal";
import WithdrawalModal from "../../components/Modals/WithdrawalModal";
import { handleCurrencyFormatting, handleGreeting } from "../../utils/helpers";
import { transactionsSelector } from "./../../redux/reducers/transactionReducer";
import "./home.scss";

const Home = () => {
  const { totalBalance } = useSelector(transactionsSelector);
  const [greeting, setGreeting] = useState("");
  const [isQuickSaveModalOpen, setIsQuickSaveModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
  let hours = new Date().getHours();

  const toggleDepositModal = () => {
    setIsQuickSaveModalOpen((prev) => !prev);
  };

  const toggleWithdrawalModal = () => {
    setIsWithdrawalModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const $greeting = handleGreeting(hours);
    setGreeting($greeting);
  }, [hours]);

  return (
    <div className="w-100 wrapper">
      <h2 className="w-100 px-2 fs-4 mt-3">{greeting} </h2>
      <Row className="d-flex justify-content-between flex-wrap mt-5 ">
        <Col>
          <Card>
            <CardBody>
              <CardTitle className="mb-3 fw-normal fs-5">
                Available Balance
              </CardTitle>

              <Row className="w-100 d-flex align-items-center flex-wrap">
                <Col className="mb-4">
                  <span className="w-100  fs-2">
                    {handleCurrencyFormatting(totalBalance)}
                  </span>
                </Col>
                <Col className="d-flex mb-4 gap-3">
                  <Button color="primary" onClick={toggleDepositModal}>
                    DEPOSIT
                  </Button>
                  <Button color="primary" onClick={toggleWithdrawalModal}>
                    WITHDRAW
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>{" "}
      <DepositModal isOpen={isQuickSaveModalOpen} toggle={toggleDepositModal} />
      <WithdrawalModal
        isOpen={isWithdrawalModalOpen}
        toggle={toggleWithdrawalModal}
      />
    </div>
  );
};

export default Home;
