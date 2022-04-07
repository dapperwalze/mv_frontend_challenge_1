import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { notification } from "antd";
import {
  withdrawFundsFailure,
  withdrawFundsSuccess,
} from "../../../redux/actions/transactionActions";
import { transactionsSelector } from "./../../../redux/reducers/transactionReducer";

const WithdrawalModal = ({ isOpen, toggle }) => {
  const [amount, setAmount] = useState(0);
  const [processing, setProcessing] = useState(false);

  const dispatch = useDispatch();
  const { totalBalance } = useSelector(transactionsSelector);

  const handleResetForm = () => {
    setAmount(0);
  };

  const handleProcessTransaction = () => {
    if (amount < 10) {
      dispatch(withdrawFundsFailure());
      notification.error({
        message: `Failed`,
        description: `$${amount} is lower than the minimum withdrawal, minimum withdrawal is $10`,
        placement: "bottomRight",
        className: "ant-notification",
      });
    } else if (amount >= 10 && amount <= totalBalance) {
      setProcessing(true);

      setTimeout(() => {
        dispatch(withdrawFundsSuccess(+amount));
        notification.success({
          message: `Success`,
          description: `Withdrawal of $${amount} was successful.`,
          placement: "bottomRight",
          className: "ant-notification",
          duration: 5,
        });
        toggle();
        setProcessing(false);
        handleResetForm();
      }, 2000);
    } else {
      setProcessing(true);

      setTimeout(() => {
        dispatch(withdrawFundsFailure());
        notification.error({
          message: `Failed`,
          description:
            "Sorry, we cannot process this transaction at this time as your available balance is low.",
          placement: "bottomRight",
          className: "ant-notification",
        });
        toggle();
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
      <ModalHeader toggle={toggle}>Withdraw</ModalHeader>
      <ModalBody className="px-3">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              {" "}
              <FormGroup>
                <Label for="amount">Amount.. (minimum: $10)</Label>
                <Input
                  type="number"
                  min={0}
                  name="amount"
                  value={amount}
                  id="amount"
                  onChange={(e) => setAmount(e.target.value)}
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

export default WithdrawalModal;
