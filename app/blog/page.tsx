

// This is a slug function just like an id
export default async function BlogPage() {
    return(
        <div className="container max-w-4xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
                            {/* can add pr-60 to move right */}
                </div>

            </div>
        </div>
    )
}