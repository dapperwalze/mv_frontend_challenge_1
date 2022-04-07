import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import {
  depositFundsFailure,
  depositFundsSuccess,
} from "./../../../redux/actions/transactionActions";
import { notification } from "antd";

const DepositModal = ({ isOpen, toggle }) => {
  const [amount, setAmount] = useState(0);
  const [processing, setProcessing] = useState(false);
  const dispatch = useDispatch();

  const handleResetForm = () => {
    setAmount(0);
  };

  const handleProcessTransaction = () => {
    if (amount < 10) {
      dispatch(depositFundsFailure());
      notification.error({
        message: `Failed`,
        description: `$${amount} is lower than the minimum deposit, minimum deposit is $10`,
        placement: "bottomRight",
        className: "ant-notification",
      });
    } else {
      setProcessing(true);

      setTimeout(() => {
        dispatch(depositFundsSuccess(+amount));
        notification.success({
          message: `Success`,
          description: `Deposit of $${amount} was successful.`,
          placement: "bottomRight",
          className: "ant-notification",
          duration: 5,
        });
        toggle();
        handleResetForm();
        setProcessing(false);
      }, 2000);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleProcessTransaction();
  };

  return (
    <Modal className="mt-6 px-4" isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Deposit</ModalHeader>
      <ModalBody className="px-3">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              {" "}
              <FormGroup>
                <Label for="amount" className="fw-light">
                  Amount .. (minimum: $10)
                </Label>
                <Input
                  type="number"
                  min={0}
                  name="amount"
                  value={amount}
                  id="amount"
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                block
                color="primary"
                type="submit"
                onClick={handleSubmit}
                disabled={processing}
              >
                {processing ? (
                  <>
                    <Spinner color="light" size="sm" /> PROCESSING
                  </>
                ) : (
                  "PROCEED"
                )}
              </Button>
            </Col>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default DepositModal;
