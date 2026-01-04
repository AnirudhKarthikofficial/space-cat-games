/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import {Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
        </Previews>
    )
}

export default ComponentPreviews