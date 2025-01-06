import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import 'bulma-switch/dist/css/bulma-switch.min.css';

const SwitchExample = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked(!isChecked);

        document.documentElement.classList.toggle('theme-light');
        document.documentElement.classList.toggle('theme-dark');

    };

    return (
        <div className="field">
            <input
                id="switchRoundedDefault"
                type="checkbox"
                name="switchRoundedDefault"
                className="switch is-rounded is-large"
                checked={isChecked}
                onChange={handleToggle}
            />
            <label htmlFor="switchRoundedDefault"></label>
        </div>
    );
};

export default SwitchExample;
