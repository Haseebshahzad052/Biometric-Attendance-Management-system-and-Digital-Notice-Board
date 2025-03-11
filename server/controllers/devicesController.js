const db = require("../db/db");

exports.getBiometricData = (req, res) => {
  const { professor_id } = req.body;

  db.query(
    "SELECT * FROM biometric WHERE professor_id = ?",
    [professor_id],
    (err, result) => {
      if (err) {
        console.error("Error fetching biometric data:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "wrong ID" });
        }
      }
    }
  );
};

exports.addDevice = (req, res) => {
  const { dname, ipadd, deviceid, commenkey, portadd } = req.body;

  db.query(
    "INSERT INTO devicedetail (device_name, IP_address, device_id, commen_key, port_address) VALUES (?,?,?,?,?)",
    [dname, ipadd, deviceid, commenkey, portadd],
    (err, result) => {
      if (err) {
        console.error("Error adding device:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      } else {
        res.send("Values Inserted");
      }
    }
  );
};

exports.deleteDeviceSetup = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM devicedetail WHERE id = ?", id, (err, result) => {
    if (err) {
      console.error("Error deleting device setup:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    } else {
      res.send(result);
    }
  });
};

exports.getDeviceSetup = (req, res) => {
  db.query("SELECT * FROM devicedetail", (err, result) => {
    if (err) {
      console.error("Error fetching device setup:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    } else {
      res.send(result);
    }
  });
};
