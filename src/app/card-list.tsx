import Card from "./card";

export default function CardList() {
    const items = [
        { 
            title: 'Supervisor', 
            text: 'Monitors activity to identify project roadblocks',
            icon: { src: '/icon-supervisor.svg', alt: 'Supervisor' },
            className: 'border-primary-Cyan'
        },
        { 
            title: 'Team Builder', 
            text: 'Scans our talent network to create the optimal team for your project',
            icon: { src: '/icon-team-builder.svg', alt: 'Team builder' },
            className: 'border-primary-Red'
        },
        { 
            title: 'Karma',
            text: 'Regularly evaluates our talent to ensure quality',
            icon: { src: '/icon-karma.svg', alt: 'Karma' },
            className: 'border-primary-Orange'
        },
        { 
            title: 'Calculator',
            text: 'Uses data from past projects to provide better delivery estimates',
            icon: { src: '/icon-calculator.svg', alt: 'Calculator' },
            className: 'border-primary-Blue'
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-7 justify-center items-center">
            <div className="">
                <Card {...items[0]} />
            </div>
            <div className="flex flex-col gap-7">
                <Card {...items[1]} />
                <Card {...items[2]} />
            </div>
            <div className="">
                <Card {...items[3]} />
            </div>
        </div>
    );
}
