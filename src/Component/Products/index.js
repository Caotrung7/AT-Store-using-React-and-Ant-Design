import { useEffect, useState } from 'react';
import { getAllProducts, addToCart, getProductsByCategory } from '../../API';
import {
  Card,
  List,
  Image,
  Typography,
  Badge,
  Rate,
  Button,
  message,
  Spin,
  Select,
} from 'antd';
import { useParams } from 'react-router-dom';

function Products() {
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState('az');

  useEffect(() => {
    setLoading(true);
    //Cú pháp "?." trong đoạn code "param?.categoryId" được gọi là Optional chaining (hoặc còn được gọi là nullish coalescing operator).
    //Đây là một tính năng được giới thiệu trong JavaScript ES2020 để giảm thiểu các lỗi khi truy cập vào các thuộc tính của một đối tượng có thể là null hoặc undefined.
    (param?.categoryId
      ? getProductsByCategory(param.categoryId)
      : getAllProducts()
    ).then((res) => {
      setItems(res.products);
      setLoading(false);
    });
  }, [param]);

  // if (loading) {
  //   return <Spin spinning />;
  // }

  const getSortedItems = () => {
    //Tạo một bản sao của mảng items bằng cách sử dụng toán tử spread ([...items]).
    //Điều này đảm bảo không làm thay đổi mảng items gốc.
    const sortedItems = [...items];
    sortedItems.sort((a, b) => {
      const aLowerCaseTitle = a.title.toLowerCase();
      const bLowerCaseTitle = b.title.toLowerCase();

      if (sortOrder === 'az') {
        return aLowerCaseTitle > bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === 'za') {
        return aLowerCaseTitle < bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === 'lowHigh') {
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      } else if (sortOrder === 'highLow') {
        return a.price < b.price ? 1 : a.price === b.price ? 0 : -1;
      }
    });
    return sortedItems;
  };

  return (
    <div className="productsContainer">
      <div>
        <Typography.Text className="sortItems">
          View Items Sorted By:{' '}
        </Typography.Text>
        <Select
          className="selectSortedItems"
          onChange={(value) => {
            setSortOrder(value);
          }}
          defaultValue={'az'}
          options={[
            {
              label: 'Alphabetically a-z',
              value: 'az',
            },
            {
              label: 'Alphabetically z-a',
              value: 'za',
            },
            {
              label: 'Price Low to High',
              value: 'lowHigh',
            },
            {
              label: 'Price High to Low',
              value: 'highLow',
            },
          ]}
        ></Select>
      </div>
      <List
        loading={loading}
        dataSource={getSortedItems()}
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Badge.Ribbon
              className="itemCardBadge"
              text={`-${product.discountPercentage}%`}
              color="pink"
            >
              <Card
                className="itemCard"
                title={product.title}
                key={index}
                cover={
                  <Image className="itemCardImage" src={product.thumbnail} />
                }
                actions={[
                  <Rate allowHalf disabled value={product.rating} />,
                  <AddToCartButton item={product} />,
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Price: ${product.price}
                      {'  '}
                      <Typography.Text delete type="danger">
                        $
                        {parseFloat(
                          product.price +
                            (product.price * product.discountPercentage) / 100,
                        ).toFixed(2)}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </Card>
            </Badge.Ribbon>
          );
        }}
      ></List>
    </div>
  );
}

function AddToCartButton({ item }) {
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    setLoading(true);
    addToCart(item.id).then((res) => {
      message.success(`${item.title} has been added to cart!`);
      setLoading(false);
    });
  };

  return (
    <Button
      type="link"
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to Cart
    </Button>
  );
}

export default Products;
