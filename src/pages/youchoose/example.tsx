import React, { useState } from "react";

export default function Example() {
    // Declarar uma nova variável de state, na qual chamaremos de "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        </div>
    );
}
