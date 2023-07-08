import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../css/Menu.css";

const Menu = () => {
  const menu = [
    {
      id: 1,
      title: "Chicken Biriyani",
      image:
        "https://media.istockphoto.com/id/501150349/photo/chicken-biryani-11.jpg?s=612x612&w=0&k=20&c=w6mDnUx8MnH3rnP9bR0VfWRwrODcbTz-6U07o3Zrs4o=",
      price: "Rs.120",
    },
    {
      id: 2,
      title: "Beef Biriyani",
      image:
        "https://10minutesrecipe.com/wp-content/uploads/2022/01/Beef-Biryani-Recipe-1.jpg",
      price: "Rs.180",
    },
    {
      id: 3,
      title: "Paneer Tikka",
      image:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2021/10/paneer-tikka-horizontal.1.jpg",
      price: "Rs.150",
    },
    {
      id: 4,
      title: "Butter Chicken",
      image:
        "https://www.simplyrecipes.com/thmb/-QzmQynep4nIQ3tncO0v3_xpPd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg",
      price: "Rs.200",
    },
    {
      id: 5,
      title: "Tandoori Naan",
      image:
        "https://cf0316.s3.amazonaws.com/cookificom/dishes/12967/43b1ed.jpg",
      price: "Rs.30",
    },
    {
      id: 6,
      title: "Kerala Sadya",
      image:
        "https://www.livelaw.in/h-upload/2023/04/26/1600x960_470011-onam-sadya.jpg",
      price: "Rs.250",
    },
    {
      id: 7,
      title: "Al Fahm",
      image: "https://i.ytimg.com/vi/CK_GDa8Rj-Y/maxresdefault.jpg",
      price: "Rs.190",
    },
    {
      id: 8,
      title: "Tandoori Chicken",
      image:
        "https://falasteenifoodie.com/wp-content/uploads/2023/03/DSC08605-scaled.jpg",
      price: "Rs.170",
    },
    {
      id: 9,
      title: "Chicken Fried Rice",
      image:
        "https://www.allchickenrecipes.com/wp-content/uploads/2018/11/Chicken-Fried-Rice.jpg",
      price: "Rs.140",
    },
    {
      id: 10,
      title: "Ghee Rice",
      image:
        "https://www.ruchikrandhap.com/wp-content/uploads/2018/07/Ghee-Rice2-1.jpg",
      price: "Rs.110",
    },
    {
      id: 11,
      title: "Porotta with Beef Curry",
      image:
        "https://img.onmanorama.com/content/dam/mm/en/travel/eatouts/images/2019/7/24/beef-porotta.jpg",
      price: "Rs.200",
    },
    {
      id: 12,
      title: "Chicken Kuzhi Manthi",
      image:
        "https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2023/5/3/kuzhi-manthi.jpg",
      price: "Rs.150",
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 6 : 0));
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex < menu.length - 6 ? prevIndex + 6 : prevIndex
    );
  };

  return (
    <div class="bdy">
      <div style={{ margin: "50px" }}>
        <Container>
          <Row>
            {menu.slice(index, index + 6).map((e) => (
              <Col key={e.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "150px" }}
                    src={e.image}
                  />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.price}</Card.Text>
                    <Button variant="danger">Order</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="carousel-buttons">
            <Button
              variant="secondary"
              onClick={handlePrev}
              disabled={index === 0}
            >
              Prev
            </Button>
            <Button
              variant="secondary"
              onClick={handleNext}
              disabled={index >= menu.length - 6}
            >
              Next
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Menu;
