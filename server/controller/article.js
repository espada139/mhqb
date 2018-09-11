const articleController = {
    async index(ctx){
        let title = "article";
        await ctx.render('article',{
            title
        })
    }
}