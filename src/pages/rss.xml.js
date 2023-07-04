import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getBlogs } from "../library/microcms";
const response = await getBlogs({ fields: ["id", "title", "publishedAt"] });

export async function get(context) {
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: response.contents.map((content) => ({
			title: content.title,
			link: content.id,
			pubDate: content.publishedAt,
		})),
	});
}
