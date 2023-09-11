import BlogCard from "@/components/BlogCard";

const data = [
    {
        imageUrl: '/people.png',
        date: '21.09.2023',
        categories: ['Cloud-based POS', 'Zeller Integrated', 'Security'],
        title: 'Interdum pellentesque lacus facilisi convallis suspendisse',
        content: 'Auctor ut aliquam, eleifend integer est varius at quam faucibus mi adipiscing convallis condimentum vel malesuada neque eu sit congue suspendisse orci maecenas.',
    },
    {
        imageUrl: '/payment.png',
        date: '21.09.2023',
        categories: ['Wellness & Productivity', 'Security'],
        title: 'Interdum pellentesque lacus facilisi convallis suspendisse',
        content: 'Auctor ut aliquam, eleifend integer est varius at quam faucibus mi adipiscing convallis condimentum vel malesuada neque eu sit congue suspendisse orci maecenas.',
    },
    {
        imageUrl: '/women.png',
        date: '21.09.2023',
        categories: ['Wellness & Productivity'],
        title: 'Interdum pellentesque lacus facilisi convallis suspendisse',
        content: 'Auctor ut aliquam, eleifend integer est varius at quam faucibus mi adipiscing convallis condimentum vel malesuada neque eu sit congue suspendisse orci maecenas.',
    },
    {
        imageUrl: '/payment2.png',
        date: '21.09.2023',
        categories: ['Wellness & Productivity'],
        title: 'Interdum pellentesque lacus facilisi convallis suspendisse',
        content: 'Auctor ut aliquam, eleifend integer est varius at quam faucibus mi adipiscing convallis condimentum vel malesuada neque eu sit congue suspendisse orci maecenas.',
    }
];

const defaultCardType = 'vertical';

export default function Home() {
    return (
        <main className="flex min-h-screen items-center p-4 sm:p-24 ">
            <div className='flex flex-col gap-16 mx-auto max-w-7xl'>
                <BlogCard
                    data={data[0]}
                    cardType='horizontal'
                    key={0}
                />
                <div className='flex flex-col md:flex-row gap-x-8'>
                    {data.slice(1).map((item, index) => (
                        <BlogCard
                            data={item}
                            cardType={defaultCardType}
                            key={index + 1}
                        />
                    ))}
                </div>
            </div>

        </main>
    )
}
