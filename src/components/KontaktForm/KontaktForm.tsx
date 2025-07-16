import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  KontaktFormComponent,
  Title,
  ErrorMessage,
  SuccessMessage,
} from "./styles";
import { useState } from "react";

interface KontaktFormValues {
  full_name: string;
  email: string;
  betreff: string;
  ihre_nachricht: string;
  agreement: boolean;
}

export default function KontaktForm() {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);

  const schema = Yup.object().shape({
    full_name: Yup.string().required("Das Feld ist erforderlich."),
    email: Yup.string()
      .required("Das Feld ist erforderlich.")
      .email("Die eingegebene E-Mail-Adresse ist ungültig."),
    betreff: Yup.string(),
    ihre_nachricht: Yup.string().required("Das Feld ist erforderlich."),
    agreement: Yup.boolean().oneOf([true], "Akzeptiere bitte die Bedingungen"),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      betreff: "",
      ihre_nachricht: "",
      agreement: false,
    
    } as KontaktFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values: KontaktFormValues, { resetForm }) => {
      setSuccess(null);
      setError(null);

        const { full_name, email, betreff, ihre_nachricht } = values;

  const payload = {
    access_key: "6ec6b6d9-79b6-4f98-b721-1b1fb5fba7d4",
    full_name,
    email,
    betreff,
    ihre_nachricht,
    _subject: "Neue Nachricht vom Kontaktformular",
    _template: "box", 
    _captcha: "false",
    _from_name: "Kontaktformular deiner Webseite"
  };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        if (result.success) {
          setSuccess("Vielen Dank! Ihre Nachricht wurde gesendet.");
          setIsSent(true);
          resetForm();
        } else {
          setError("Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.");
        }
      } catch (err) {
        console.error("Fehler beim Senden:", err);
        setError("Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.");
      }
    },
  });

  return (
    <KontaktFormComponent onSubmit={formik.handleSubmit}>

      {isSent ? (
    <SuccessMessage>{success}</SuccessMessage>
  ) : (
    <>
      <Title>Kontaktformular</Title>

      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <Input
        name="full_name"
        label="Full Name *"
        id="full_name_id"
        value={formik.values.full_name}
        onChange={formik.handleChange}
        error={formik.errors.full_name}
      />
      <Input
        name="email"
        label="Email *"
        id="email_id"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        name="betreff"
        label="Betreff"
        id="betreff_id"
        value={formik.values.betreff}
        onChange={formik.handleChange}
        error={formik.errors.betreff}
      />
      <Input
        name="ihre_nachricht"
        label="Ihre Nachrict *"
        id="nachricht_id"
        value={formik.values.ihre_nachricht}
        onChange={formik.handleChange}
        error={formik.errors.ihre_nachricht}
      />
      <CheckboxContainer>
        <Checkbox
          name="agreement"
          type="checkbox"
          id="agree_id"
          checked={formik.values.agreement}
          onChange={formik.handleChange}
        />
        <CheckboxLabel htmlFor="agree_id">
          Ich bin damit einverstanden, dass die von mir angegebenen Daten
          elektronisch erhoben und gespeichert werden. Meine Daten werden dabei
          nur zweckgebunden zur Bearbeitung und Beantwortung meiner Anfrage
          genutzt.
        </CheckboxLabel>
      </CheckboxContainer>
      <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
      <Button name="SENDEN" />
   </>
  )}
    </KontaktFormComponent>
  );
}
