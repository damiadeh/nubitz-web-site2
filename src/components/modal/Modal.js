import React from "react";
import styles from "./modal.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "components/primary-button/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#ffffff",
    width: "550px",
    boxShadow: theme.shadows[5],
    padding: "40px 20px",
    outline: "none"
  },
}));

export default function TransitionsModal({ handleOpen, handleClose }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={styles.container}>
              <h5>Apply For This Job</h5>
              <h3>Product Designer</h3>
              <div className={styles.form}>
                <form>
                  <div>
                    <label>Full Name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Email Address</label>
                    <input type="email" />
                  </div>
                  <div className={styles.upload}>
                    <p>
                      Click <span>here</span> to upload your CV
                    </p>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button
                      text="Apply"
                      backgroundColor="#1e396e"
                      textColor="#ffffff"
                      width="40%"
                      onClick={handleClose}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
