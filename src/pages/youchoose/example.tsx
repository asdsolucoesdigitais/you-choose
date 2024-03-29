import React, { useState, useEffect } from "react";

export default function Exemplo() {
    const [count, setCount] = useState(0);

    // Similar ao componentDidMount e componentDidUpdate:
    useEffect(() => {
        // Atualiza o título do documento usando a API do browser
        document.title = `Você clicou ${count} vezes`;
    });

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        </div>
    );
}
