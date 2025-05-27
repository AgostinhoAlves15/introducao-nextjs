// app/products/page.tsx

export default function ProductsList() {
  const products = [
    { id: 1, name: 'Camisa flamengo', price: 'R$ 79,90' },
    { id: 2, name: 'Tênis ', price: 'R$ 199,99' },
    { id: 3, name: 'relogio', price: 'R$ 149,00' },
  ];

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
