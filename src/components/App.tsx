import { Container, Row, Col } from "shards-react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation"

function App() {
  const { t } = useTranslation();

  return (
    <div className="landing d-flex justify-content-center flex-column">
      <Container>
        <Navigation/>
      </Container>
      <Container className="mt-auto mb-auto">
        <Row>
          <Col>
            <h1 className="display-4 text-white">
              {t("Gelateria Polaris")}
            </h1>
            <p className="text-white">{t("dal 1989")}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
