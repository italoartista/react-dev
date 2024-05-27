import { Flex, Text, Button } from '@radix-ui/themes';

const Shelf = ({ products }) => {
    return (
        <>
            <Flex direction="column" gap="2">
                <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <img src={product.image} alt={product.nome} />
                                <h2>{product.nome}</h2>
                                <p>{product.preco}</p>
                                <button style={{
                                    background: 'black',
                                    color: "white",
                                    padding: "15px"
                                }}>Comprar</button>
                            </li>
                        ))}
                    </ul>
          
            </Flex>
            <div className="shelf">
               
            </div>
        </>
    );
}
export default Shelf;