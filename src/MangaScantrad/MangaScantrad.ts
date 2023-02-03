import {
    ContentRating,
    LanguageCode,
    SourceInfo,
    TagType
} from 'paperback-extensions-common'
import {
    getExportVersion,
    Madara
} from '../Madara'

const DOMAIN = 'https://manga-scantrad.io/'

export const MangaScantradInfo: SourceInfo = {
    version: getExportVersion('0.0.1'),
    name: 'MangaScantrad',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'Rublood',
    authorWebsite: 'http://github.com/rublood',
    icon: 'icon.png',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: TagType.GREEN
        },
        {
            text: 'Cloudflare',
            type: TagType.RED
        }
    ]
}

export class MangaScantrad extends Madara {

    baseUrl: string = DOMAIN

    languageCode: LanguageCode = LanguageCode.FRENCH

    // override sourceTraversalPathName = 'read'
    
    // override alternativeChapterAjaxEndpoint = true
}
