export default function AuthCard({

    title,

    children

}){

    return(

        <div className="bg-white shadow-xl rounded-xl w-[420px] p-10">

            <h1 className="text-3xl font-bold mb-8">

                {title}

            </h1>

            {children}

        </div>

    );

}