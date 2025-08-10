export const trpcErrorFormater = ({ shape, error }: any) => {
    console.log(process.env.NODE_ENV);
    
    return {
        ...shape,
        message:
            process.env.NODE_ENV === "production" ? "An error occurred" : shape.message,
        code: error.code,
    };
}