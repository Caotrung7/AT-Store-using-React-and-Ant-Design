import { HomeFilled, ShoppingCartOutlined } from '@ant-design/icons';
import {
  Badge,
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  Menu,
  Table,
  Typography,
  message,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCart } from '../../API';

function AppHeader() {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };

  return (
    <div className="appHeader">
      <Menu
        className="appMenu"
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: '',
          },
          {
            label: 'Men',
            key: 'men',
            children: [
              {
                label: "Men's Shirts",
                key: 'mens-shirts',
              },
              {
                label: "Men's Shoes",
                key: 'mens-shoes',
              },
              {
                label: "Men's Watches",
                key: 'mens-watches',
              },
            ],
          },
          {
            label: 'Women',
            key: 'women',
            children: [
              {
                label: "Women's Dresses",
                key: 'womens-dresses',
              },
              {
                label: "Women's Shoes",
                key: 'womens-shoes',
              },
              {
                label: "Women's Watches",
                key: 'womens-watches',
              },
              {
                label: "Women's Bags",
                key: 'womens-bags',
              },
              {
                label: "Women's Jewellery",
                key: 'womens-jewellery',
              },
            ],
          },
          {
            label: 'Fragrances',
            key: 'fragrances',
          },
        ]}
      ></Menu>
      <Typography.Title>AT+ STORE</Typography.Title>
      <AppCart />
    </div>
  );
}

function AppCart() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getCart().then((res) => {
      setCartItems(res.products);
    });
  }, []);

  const OnConfirmOrder = (values) => {
    console.log(values);
    setCartDrawerOpen(false);
    setCheckoutDrawerOpen(false);
    message.success('Your order has been placed successfully.');
  };

  return (
    <div>
      <Badge
        count={cartItems.length}
        className="shoppingCartIcon"
        onClick={() => {
          setCartDrawerOpen(true);
        }}
      >
        <ShoppingCartOutlined />
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => {
          setCartDrawerOpen(false);
        }}
        title="Your cart"
        contentWrapperStyle={{ width: 500 }}
      >
        <Table
          dataSource={cartItems}
          columns={[
            {
              title: 'Title',
              dataIndex: 'title',
            },
            {
              title: 'Price',
              dataIndex: 'price',
              render: (value) => {
                return <span>${value}</span>;
              },
            },
            {
              title: 'Quantity',
              dataIndex: 'quantity',
              render: (value, record) => {
                return (
                  <InputNumber
                    min={0}
                    defaultValue={value}
                    onChange={(value) => {
                      setCartItems((pre) =>
                        pre.map((cart) => {
                          if (record.id === cart.id) {
                            cart.total = cart.price * value;
                          }
                          return cart;
                        }),
                      );
                    }}
                  ></InputNumber>
                );
              },
            },
            {
              title: 'Total',
              dataIndex: 'total',
              render: (value) => {
                return <span>${value}</span>;
              },
            },
          ]}
          pagination={false}
          summary={(data) => {
            const total = data.reduce((pre, current) => {
              return pre + current.total;
            }, 0);
            return <span>Total: {total}</span>;
          }}
        ></Table>
        <Button
          onClick={() => {
            setCheckoutDrawerOpen(true);
          }}
          type="primary"
        >
          Checkout Your Cart
        </Button>
      </Drawer>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => {
          setCheckoutDrawerOpen(false);
        }}
        title="Confirm Order"
      >
        <Form onFinish={OnConfirmOrder}>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please enter your full name',
              },
            ]}
            label="Full Name"
            name="full-name"
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter a valid email',
              },
            ]}
            label="Email"
            name="email"
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please enter your address',
              },
            ]}
            label="Address"
            name="address"
          >
            <Input placeholder="Enter your address" />
          </Form.Item>
          <Form.Item>
            <Checkbox defaultChecked disabled>
              Cash on Delivery
            </Checkbox>
          </Form.Item>
          <Typography.Paragraph type="secondary">
            More methods coming soon
          </Typography.Paragraph>
          <Button type="primary" htmlType="submit">
            Confirm Order
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}

export default AppHeader;
