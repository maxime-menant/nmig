/*
 * This file is a part of "NMIG" - the database migration tool.
 *
 * Copyright 2016 Anatoly Khaytovich <anatolyuss@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program (please see the "LICENSE.md" file).
 * If not, see <http://www.gnu.org/licenses/gpl.txt>.
 *
 * @author Anatoly Khaytovich <anatolyuss@gmail.com>
 */
'use strict';

/**
 * Create a new Buffer instance.
 *
 * @param {String} string
 * @param {String} encoding
 *
 * @returns {Buffer}
 */
module.exports = function(string, encoding) {
    // Remove NULL
    var str = string.replace(/\x00/g,'');
    // Normalize date
    str = str.replace(/0000-/g,'2000-');

    return Buffer.from(str, encoding);
};
